// Vertex shader for the black hole effect
export const blackHoleVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Fragment shader for the black hole effect
export const blackHoleFragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform float intensity;
  varying vec2 vUv;
  
  #define PI 3.14159265359
  
  // Noise functions
  float mod289(float x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec4 perm(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
  }
  
  float noise(vec3 p) {
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);
    
    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);
    
    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);
    
    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));
    
    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
    
    return o4.y * d.y + o4.x * (1.0 - d.y);
  }
  
  // Main function
  void main() {
    // Center coordinates
    vec2 uv = vUv - 0.5;
    vec2 center = vec2(0.0);
    
    // Calculate distance from center
    float dist = length(uv);
    
    // Black hole effect
    float blackHoleRadius = 0.15;
    float accretionDiskRadius = 0.3;
    float glowRadius = 0.5;
    
    // Create black hole center
    float blackHole = smoothstep(blackHoleRadius, 0.0, dist);
    
    // Create accretion disk
    float disk = smoothstep(accretionDiskRadius, accretionDiskRadius - 0.05, dist) * 
                 smoothstep(accretionDiskRadius - 0.15, accretionDiskRadius - 0.1, dist);
    
    // Create outer glow
    float glow = smoothstep(glowRadius, blackHoleRadius, dist) * 0.6;
    
    // Calculate angle for rotation effects
    float angle = atan(uv.y, uv.x);
    
    // Add time-based animation to the disk
    float diskAnimation = sin(angle * 20.0 + time * 2.0) * 0.5 + 0.5;
    
    // Create noise for the accretion disk
    float noiseValue = noise(vec3(uv * 5.0, time * 0.2)) * 0.5 + 0.5;
    
    // Create color for the black hole
    vec3 blackHoleColor = vec3(0.0);
    
    // Create color for the accretion disk with noise
    vec3 diskColor = mix(
      vec3(0.9, 0.1, 0.3), // Red-orange
      vec3(0.1, 0.5, 0.9), // Blue
      diskAnimation * noiseValue
    );
    
    // Create color for the glow
    vec3 glowColor = mix(
      vec3(0.5, 0.0, 0.8), // Purple
      vec3(0.0, 0.4, 0.8), // Blue
      smoothstep(0.0, 1.0, dist / glowRadius)
    );
    
    // Combine all elements
    vec3 finalColor = blackHoleColor * blackHole +
                     diskColor * disk * intensity +
                     glowColor * glow * intensity;
    
    // Add stars in the background
    if (dist > blackHoleRadius && noiseValue > 0.97) {
      finalColor += vec3(1.0) * (noiseValue - 0.97) * 30.0;
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`