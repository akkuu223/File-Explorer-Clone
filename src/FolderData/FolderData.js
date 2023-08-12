const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "nested_public",
          isFolder: true,
          items: [
            {
              id: 6,
              name: "data.json",
              isFolder: false,
              items: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 7,
          name: "index.html",
          isFolder: false,
          items: []
        },
        {
          id: 8,
          name: "index.css",
          isFolder: false,
          items: []
        },
        {
          id: 9,
          name: "App.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: 4,
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

export default explorer;
