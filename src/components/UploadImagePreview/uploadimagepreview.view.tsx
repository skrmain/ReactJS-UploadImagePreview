import React from "react";
import { Box, Button, Grid, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FileObject } from "./types";

interface LoginViewProps {
  handleSubmit: () => void;
  handleFileInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadImageRemove: (index: number) => void;
  images: FileObject[];
}

const AddProductView: React.FC<LoginViewProps> = ({
  handleSubmit,
  handleFileInput,
  handleUploadImageRemove,
  images,
}) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper>
          <Grid container justifyContent="center">
            <Grid item xs={10}>
              <Box mt="30px">
                <input
                  accept="image/*"
                  id="contained-button-file"
                  onInput={handleFileInput}
                  type="file"
                  hidden
                  multiple
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Select Images
                  </Button>
                </label>
                {images && images.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {images?.map((value, index) => (
                      <div key={index} style={{ margin: ".5rem" }}>
                        <img
                          width="100"
                          src={value.imgStr}
                          alt={"uploaded : " + index}
                        />
                        <IconButton
                          aria-label="delete"
                          onClick={(e) => handleUploadImageRemove(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    ))}
                  </div>
                )}
              </Box>

              <Box my="30px">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Log to Console
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProductView;
