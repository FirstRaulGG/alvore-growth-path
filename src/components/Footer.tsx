import alvoreLogo from "@/assets/alvore-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter py-12 border-t border-gold/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={alvoreLogo} alt="Alvore" className="h-6 w-6 object-contain" />
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
              Alvore
            </p>
          </div>
          <p className="text-muted-light text-xs font-light tracking-wide">
            {year} Alvore Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
