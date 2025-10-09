import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const UserInfoButtonFucn = styled(Button)(({ theme }) => ({}));

export const UserInfoButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <UserInfoButtonFucn
        ref={ref}
        {...props}
        startIcon={<ContactPageIcon></ContactPageIcon>}
      >
        유저정보
      </UserInfoButtonFucn>
    );
  },
);
