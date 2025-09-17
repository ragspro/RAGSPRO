import Head from 'next/head'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - RAGSPRO</title>
      </Head>
      
      <section className="min-h-screen bg-primary pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-gray-400 mb-6">Last updated: January 2025</p>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
                  <p>By accessing and using RAGSPRO services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Services</h2>
                  <p>RAGSPRO provides AI product development, automation solutions, and digital services as described on our website.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Payment Terms</h2>
                  <p>Payment terms will be specified in individual project agreements. All payments are due as per the agreed schedule.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
                  <p>RAGSPRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Contact Information</h2>
                  <p>For questions about these Terms of Service, please contact us at raghav@ragspro.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}