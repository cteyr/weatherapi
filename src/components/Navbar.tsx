const Navbar = ({ nameCountry }: IProps) => {
  return (
    <div className="header">
      <div className="tittle">
        <h1>{nameCountry}</h1>
      </div>
    </div>
  );
};

type IProps = {
  nameCountry: string;
};
export { Navbar };
