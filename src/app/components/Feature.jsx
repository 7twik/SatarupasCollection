import Image from "next/image";

export default function Feature() {
    // const src="https://c8.alamy.com/comp/2R8F9NW/colorful-rangoli-pattern-design-for-diwali-isolated-on-a-white-background-vector-illustration-2R8F9NW.jpg"
    // const src2="https://static.vecteezy.com/system/resources/previews/023/822/996/non_2x/colorful-rangoli-design-isolated-on-a-white-background-free-vector.jpg"
    // const src3="https://png.pngtree.com/png-vector/20241014/ourmid/pngtree-beautiful-rangoli-designs-on-a-white-background-png-image_14077342.png"
    // const src4="https://img.freepik.com/premium-vector/colorful-rangoli-design-isolated-white-background_8130-2546.jpg"
    const src="/p6.jpg"
    const src2="/p3.jpg"
    const src3="/p10.jpg"
    const src4="/p5.jpg"
    return (
      <section className="back3 relative bg-gradient-to-br from-navy-900 via-purple-900 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-purple-400 text-lg font-medium mb-2">
                What makes us special?
              </h2>
              <h3 className="text-4xl sm:text-5xl font-bold textgr">
                Artistry and craftsmanship at your fingertips.
              </h3>
            </div>
            <div className="lg:pt-8">
              <p className="text-black text-lg">
                Discover unique handcrafted pieces that bring beauty and character to your space. 
                Each item tells a story of artistic dedication and masterful craftsmanship.
              </p>
            </div>
          </div>
  
          {/* Featured Boxes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-8 rounded-2xl  boxgr flex md:flex-row flex-col">
                <div className="md:w-[20vw] w-[80vw] pb-5 md:pb-0">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        Handcrafted Art
                    </h3>
                    <p className="text-gray-300">
                        Explore our collection of hand-thrown ceramics, each piece uniquely shaped 
                        and glazed by skilled artisans. From functional pieces to decorative art, 
                        find the perfect addition to your home.
                    </p>
                </div>
                <div className="w-60 h-60 bg rounded-full " 
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "100%",
                }}>
                
              </div>
            </div>
            <div className="relative p-8 rounded-2xl  boxgr flex md:flex-row flex-col">
                <div className="md:w-[20vw] w-[80vw] pb-5 md:pb-0">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        Beautiful crafted textiles
                    </h3>
                    <p className="text-gray-300">
                        Discover handwoven textiles that blend traditional techniques with 
                        contemporary design. Our collection features unique patterns and 
                        textures that bring warmth to any space.
                    </p>
                </div>
                <div className="w-60 h-60 bg rounded-full " 
                    style={{
                        backgroundImage: `url(${src2})`,
                        backgroundSize: "100%",
                }}>
                
              </div>
            </div>
            <div className="relative p-8 rounded-2xl  boxgr flex md:flex-row flex-col ">
                <div className="md:w-[20vw] w-[80vw] pb-5 md:pb-0">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                    Custom Orders
                    </h3>
                    <p className="text-gray-300">
                    Work directly with our artisans to create bespoke pieces tailored 
                to your vision. From concept to creation, we&apos;ll bring your ideas 
                to life with expert craftsmanship.
                    </p>
                </div>
                <div className="w-60 h-60 bg rounded-full " 
                    style={{
                        backgroundImage: `url(${src3})`,
                        backgroundSize: "100%",
                }}>
                
              </div>
            </div>
            <div className="relative p-8 rounded-2xl  boxgr flex md:flex-row flex-col">
                <div className="md:w-[20vw] w-[80vw] pb-5 md:pb-0">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                    Textile Arts
                    </h3>
                    <p className="text-gray-300">
                    Discover handwoven textiles that blend traditional techniques with 
                contemporary design. Our collection features unique patterns and 
                textures that bring warmth to any space.    
                    </p>
                </div>
                <div className="w-60 h-60 bg rounded-full " 
                    style={{
                        backgroundImage: `url(${src4})`,
                        backgroundSize: "100%",
                }}>
                
              </div>
            </div>
          </div>
        </div>
  
        {/* Decorative Elements */}
       
      </section>
    )
  }
  
  