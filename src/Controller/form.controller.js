class FormController {
  getForm(req, res) {
    res.render("form");
  }

  postForm(req, res) {
    res.render("subscribed");
  }

  goBack(req, res) {
    res.redirect("/");
  }
}

export default FormController;
