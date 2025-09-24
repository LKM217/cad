export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-sans font-normal tracking-wide">CAHIER D'ART</span>
            </div>

            <nav className="hidden md:flex items-center space-x-16">
              <a href="#publications" className="nav-text hover:opacity-60 transition-opacity">
                Publications
              </a>
              <a href="#collections" className="nav-text hover:opacity-60 transition-opacity">
                Collections
              </a>
              <a href="#artistes" className="nav-text hover:opacity-60 transition-opacity">
                Artists
              </a>
              <a href="#contact" className="nav-text hover:opacity-60 transition-opacity">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-8">
              <button className="nav-text hover:opacity-60 transition-opacity">EN</button>
              <button className="minimal-button px-6 py-3">SHOP</button>
            </div>
          </div>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center pt-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="cahier-text-large text-balance mb-16">
              Art Publishing
              <span className="block">Since 1926</span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-md text-pretty mb-20 leading-relaxed">
              Cahier d'Art publishes exceptional art books in collaboration with leading contemporary artists, museums,
              and cultural institutions worldwide.
            </p>
            <div className="flex items-center space-x-12">
              <button className="minimal-button px-8 py-4">VIEW PUBLICATIONS</button>
              <a href="#about" className="nav-text hover:opacity-60 transition-opacity">
                ABOUT →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cahier-section">
        <div className="container mx-auto px-8">
          <div className="mb-24">
            <p className="nav-text text-muted-foreground mb-8">New Releases</p>
            <h2 className="cahier-text-medium text-balance mb-12">Recent Publications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Picasso & Braque",
                subtitle: "The Invention of Cubism",
                year: "2024",
                price: "€180",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "Yves Klein",
                subtitle: "Blue and the Infinite",
                year: "2024",
                price: "€220",
                image: "/placeholder.svg?height=600&width=400",
              },
              {
                title: "Basquiat",
                subtitle: "Works on Paper",
                year: "2023",
                price: "€160",
                image: "/placeholder.svg?height=600&width=400",
              },
            ].map((book, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-8 bg-muted/20">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="nav-text text-muted-foreground">{book.year}</span>
                    <span className="nav-text">{book.price}</span>
                  </div>
                  <h3 className="text-lg font-sans font-normal text-balance">{book.title}</h3>
                  <p className="text-xs text-muted-foreground text-pretty">{book.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cahier-section bg-muted/10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <p className="nav-text text-muted-foreground mb-8">Our Mission</p>
              <h2 className="cahier-text-medium text-balance mb-16">Revealing Contemporary Art</h2>
              <div className="space-y-8 text-sm leading-relaxed">
                <p className="text-pretty">
                  Founded by Christian Zervos in 1926, Cahier d'Art has established itself as a global reference in
                  contemporary art publishing.
                </p>
                <p className="text-pretty">
                  We work closely with artists, museums, and cultural institutions to create exceptional publications
                  that showcase the richness of contemporary artistic creation.
                </p>
                <p className="text-pretty">
                  Each publication is the result of meticulous editorial work, combining graphic excellence with
                  scientific rigor.
                </p>
              </div>
              <button className="minimal-button px-8 py-4 mt-16">LEARN MORE</button>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-muted/20">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Art gallery interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cahier-section">
        <div className="container mx-auto px-8">
          <div className="mb-24">
            <p className="nav-text text-muted-foreground mb-8">Collections</p>
            <h2 className="cahier-text-medium text-balance mb-12">Our Core Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              {
                title: "Monographs",
                description: "Reference works dedicated to the great masters of contemporary art",
                count: "150+ Titles",
              },
              {
                title: "Catalogues Raisonnés",
                description: "Comprehensive documentation of major artists' works",
                count: "25+ Volumes",
              },
              {
                title: "Cahier d'Art Review",
                description: "Historic publication founded in 1926, witness to the art of its time",
                count: "Since 1926",
              },
            ].map((collection, index) => (
              <div key={index} className="text-left">
                <h3 className="text-xl font-sans font-normal mb-8">{collection.title}</h3>
                <p className="text-muted-foreground mb-12 text-pretty text-sm leading-relaxed">
                  {collection.description}
                </p>
                <span className="nav-text text-muted-foreground">{collection.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <span className="text-sm font-sans font-normal tracking-wide mb-12 block">CAHIER D'ART</span>
              <p className="text-background/60 max-w-md text-pretty leading-relaxed text-sm">
                French publishing house specializing in contemporary art publications since 1926.
              </p>
            </div>

            <div>
              <h4 className="nav-text text-background mb-8">Navigation</h4>
              <ul className="space-y-4 text-background/60 text-xs">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Artists
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    History
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="nav-text text-background mb-8">Contact</h4>
              <ul className="space-y-4 text-background/60 text-xs">
                <li>Paris, France</li>
                <li>contact@cahierdart.com</li>
                <li>+33 1 42 97 48 50</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 mt-20 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/40 nav-text">© 2025 Cahier d'Art</p>
            <div className="flex space-x-12 mt-8 md:mt-0">
              <a href="#" className="text-background/40 hover:text-background/60 nav-text transition-colors">
                Legal
              </a>
              <a href="#" className="text-background/40 hover:text-background/60 nav-text transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
