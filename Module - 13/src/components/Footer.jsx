function footer() {
  return (
    <footer className="container p-3 bg-body-tertiary">
      <div className="footer pb-3 border-bottom "><h1 className="text-center">Footer area</h1></div>
      <div>All right reserved &copy; <span>{new Date().getFullYear()}</span> </div>
    </footer>
  );
}

export default footer;
