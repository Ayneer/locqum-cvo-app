import React from 'react';
import { Button } from "@material-ui/core";
import { Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const LoginForm = ({ submitForm, isSubmitting }) => {
    return (
        <Form>
            <Field
                className="field-formik"
                component={TextField}
                name="email"
                type="email"
                label="Email"
            />
            <Field
                className="field-formik"
                component={TextField}
                type="password"
                label="Password"
                name="password"
            />
            <Button
                className="btn-login"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
            >
                Iniciar sesión
          </Button>
        </Form>
    )
}

export default LoginForm;