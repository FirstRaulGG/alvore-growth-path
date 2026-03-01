const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-light text-sm font-light tracking-wider">
            ALVORE CONSULTORIA
          </p>
          <p className="text-muted-light text-sm font-light">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
