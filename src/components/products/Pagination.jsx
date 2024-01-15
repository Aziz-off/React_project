import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaginationControlled(props) {
  const { page, count, handleChange } = props;

  return (
    <Stack spacing={2} sx={{ textAlign: "center", marginTop: 2 }}>
      <Typography variant="subtitle1">
        Page: {page} of {count}
      </Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}
