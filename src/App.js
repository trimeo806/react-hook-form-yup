import "./App.css";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

function App() {
  //Su dung react hook form tao ra {register, handleSubmit, formState: {errors}}
  const defaultValues = {
    email: "tringuyen@gmail.com",
    password: "123",
    remember: "true",
  };

  const methods = useForm({ defaultValues });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Sever Response Error" });
  };
  useEffect(() => {
    console.log(control.register);
  });

  return (
    <div className="App">
      <Typography variant="h3" textalign="center" mb={3}>
        h1. Heading
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="errors">{errors.afterSubmit.message}</Alert>
          )}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Email Address"
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field} //Neu khong co cai nay
                s
              />
            )}
          ></Controller>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() =>
                          setShowPassword(!showPassword ? false : true)
                        }
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      ></IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            )}
          ></Controller>
        </Stack>
      </form>
    </div>
  );
}

export default App;
