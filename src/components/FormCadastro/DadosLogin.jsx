import { TextField, Button } from "@mui/material";
import React from "react";

function DadosLogin() {
    return (
        <form>
            <TextField 
                id="email" 
                label="email" 
                type="email"
                variant="standard"
                margin="normal"
                fullWidth
            />

            <TextField 
                id="senha" 
                label="senha" 
                type="password"
                variant="standard"
                margin="normal"
                fullWidth
            />

            <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                log in
            </Button>
        </form>
    )

}

export default DadosLogin; 