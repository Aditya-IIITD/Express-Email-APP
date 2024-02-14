import db from "../../firebaseinit.js";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";

class FormController {
  getForm(req, res) {
    res.render("form");
  }

  async postForm(req, res) {
    const { name, email } = req.body;
    await addDoc(collection(db, "Users"), {
      name: name,
      email: email,
      time: new Date().toString(),
    });
    res.render("subscribed");
  }
  goBack(req, res) {
    res.redirect("/");
  }
}

export default FormController;
