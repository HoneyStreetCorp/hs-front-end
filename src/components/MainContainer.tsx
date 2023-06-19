const MainContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="w-screen max-w-screen-sm h-screen mx-auto my-0">
      {children}
    </div>
  );
};

export default MainContainer;
