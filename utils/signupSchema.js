
import * as Yup from "yup";

const validationSchema = Yup.object().shape({

    email:Yup.string().required("Email is required").email("Invalid email format")
})