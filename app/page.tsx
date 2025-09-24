export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lg font-serif font-bold tracking-tight">CAHIER D'ART</span>
            </div>

            <nav className="hidden md:flex items-center space-x-12">
              <a href="#publications" className="nav-text hover:text-muted-foreground transition-colors">
                Publications
              </a>
              <a href="#collections" className="nav-text hover:text-muted-foreground transition-colors">
                Collections
              </a>
              <a href="#artistes" className="nav-text hover:text-muted-foreground transition-colors">
                Artistes
              </a>
              <a href="#contact" className="nav-text hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-6">
              <button className="nav-text hover:text-muted-foreground transition-colors">FR / EN</button>
              <button className="nav-text border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-all">
                CATALOGUE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="cahier-hero min-h-screen flex items-center justify-center pt-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="cahier-text-large text-balance mb-12">
              L'EXCELLENCE
              <span className="block">ÉDITORIALE</span>
              <span className="block text-muted-foreground">AU SERVICE DE L'ART</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-xl mx-auto text-pretty mb-16 leading-relaxed font-light">
              Depuis 1926, Cahier d'Art publie les plus beaux ouvrages d'art contemporain, révélant les œuvres et les
              artistes qui façonnent notre époque.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="minimal-button px-8 py-4 text-sm font-medium uppercase tracking-wider">
                Découvrir nos publications
              </button>
              <button className="nav-text hover:text-muted-foreground transition-colors">Notre histoire →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="cahier-section">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <p className="nav-text text-muted-foreground mb-6">Nouveautés</p>
            <h2 className="cahier-text-medium text-balance mb-8">PUBLICATIONS RÉCENTES</h2>
            <p className="text-base text-muted-foreground max-w-2xl text-pretty font-light leading-relaxed">
              Découvrez nos dernières parutions, fruit d'un travail éditorial d'exception en collaboration avec les plus
              grands artistes contemporains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "PICASSO & BRAQUE",
                subtitle: "L'invention du cubisme",
                year: "2024",
                price: "€180",
                image: "/placeholder.svg?height=500&width=350",
              },
              {
                title: "YVES KLEIN",
                subtitle: "Le bleu et l'infini",
                year: "2024",
                price: "€220",
                image: "/placeholder.svg?height=500&width=350",
              },
              {
                title: "BASQUIAT",
                subtitle: "Œuvres sur papier",
                year: "2023",
                price: "€160",
                image: "/placeholder.svg?height=500&width=350",
              },
            ].map((book, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="nav-text text-muted-foreground">{book.year}</span>
                    <span className="nav-text">{book.price}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-balance">{book.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty font-light">{book.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cahier-section bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="nav-text text-muted-foreground mb-6">Notre mission</p>
              <h2 className="cahier-text-medium text-balance mb-12">RÉVÉLER L'ART CONTEMPORAIN</h2>
              <div className="space-y-8 text-base leading-relaxed font-light">
                <p className="text-pretty">
                  Fondée par Christian Zervos en 1926, Cahier d'Art s'est imposée comme une référence mondiale dans
                  l'édition d'art contemporain.
                </p>
                <p className="text-pretty">
                  Nous collaborons étroitement avec les artistes, les musées et les institutions culturelles pour créer
                  des ouvrages d'exception qui témoignent de la richesse de la création artistique contemporaine.
                </p>
                <p className="text-pretty">
                  Chaque publication est le fruit d'un travail éditorial minutieux, alliant excellence graphique et
                  rigueur scientifique.
                </p>
              </div>
              <button className="minimal-button px-8 py-4 text-sm font-medium uppercase tracking-wider mt-12">
                En savoir plus
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Intérieur de galerie d'art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="cahier-section">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <p className="nav-text text-muted-foreground mb-6">Collections</p>
            <h2 className="cahier-text-medium text-balance mb-8">NOS COLLECTIONS PHARES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "MONOGRAPHIES",
                description: "Ouvrages de référence consacrés aux grands maîtres de l'art contemporain",
                count: "150+ TITRES",
              },
              {
                title: "CATALOGUES RAISONNÉS",
                description: "Documentation exhaustive des œuvres d'artistes majeurs",
                count: "25+ VOLUMES",
              },
              {
                title: "REVUE CAHIER D'ART",
                description: "Publication historique fondée en 1926, témoin de l'art de son époque",
                count: "DEPUIS 1926",
              },
            ].map((collection, index) => (
              <div key={index} className="text-left">
                <h3 className="text-2xl font-serif font-bold mb-6">{collection.title}</h3>
                <p className="text-muted-foreground mb-8 text-pretty font-light leading-relaxed">
                  {collection.description}
                </p>
                <span className="nav-text text-muted-foreground">{collection.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <span className="text-lg font-serif font-bold tracking-tight mb-8 block">CAHIER D'ART</span>
              <p className="text-background/70 max-w-md text-pretty leading-relaxed font-light">
                Maison d'édition française de prestige spécialisée dans les publications d'art contemporain depuis 1926.
              </p>
            </div>

            <div>
              <h4 className="nav-text text-background mb-6">Navigation</h4>
              <ul className="space-y-3 text-background/70 text-sm font-light">
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
                    Artistes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Histoire
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="nav-text text-background mb-6">Contact</h4>
              <ul className="space-y-3 text-background/70 text-sm font-light">
                <li>Paris, France</li>
                <li>contact@cahierdart.com</li>
                <li>+33 1 42 97 48 50</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/50 nav-text">© 2025 Cahier d'Art. Tous droits réservés.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-background/50 hover:text-background nav-text transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-background/50 hover:text-background nav-text transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
