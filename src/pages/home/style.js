// jss giúp viết css bên trong js
// dùng để thay đổi những css của material theo custom, key theo css bỏ dấu gạch ngang, viết hoa chữ cái típ theo, value cho vào "value"
export const style = {
  myBtn: {
    backgroundColor: "#ffc700",
    "&:hover": {
      backgroundColor: "#fc54ef",
    },
  },
};
