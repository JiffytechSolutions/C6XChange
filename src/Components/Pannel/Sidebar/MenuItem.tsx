export const menuData = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: "",
     
    },
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: "",
       
      },
    {
      id: "proList",
      label: "Product List",
      path: "/productList",
      icon: "",
      children: [
        {
          id: "pro1",
          label: "pro1",
          path: "/product1",
        },
        {
          id: "pro2",
          label: "pro2",
          path: "/product2",
        },
        {
          id: "pro3",
          label: "pro3",
          path: "/product3",
        },
      ],
    },
    {
      id: "setting",
      label: "Setting",
      path: "/setting",
      icon: "",
    },
    {
      id: "help",
      label: "Help",
      path: "/help",
      icon: "",
    },
    {
      id: "faq",
      label: "FAQ",
      path: "/faq",
      icon: "",
    },
  ];