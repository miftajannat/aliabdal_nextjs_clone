![Screenshot from 2023-02-08 14-30-23](https://user-images.githubusercontent.com/108230404/217478928-92d8dce5-8bc9-4d65-ae18-45063ecda31b.png)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



## Navbar 
You can change navbar item and link in navbar.js as you wish. If you want to change Newsletter item and link you must go newsletter.js file. And for store items and link store.js file.  


## Personal info
You change your pic and your description in section1.js


## Image
In image folder you change your images as you want. 


## BLOG:
If you want to change the name "Al Blogs". You must open navbar.js then change the name as you wish. You can also change "Latest AI Blogs" in blogpost.js file. Then change your newsletter data and link in blog.js.

- To change the AI Blog page data. Go to blog.data, follow these steps:

Open the file blogData.js in your code editor.
Modify the existing objects in the blogData array with your own information. Each object represents a blog post and should include the following properties:
        - id: A unique identifier for each blog post.
        - title: The title of the blog post.
        - description: A brief description of the blog post.
        - date: The date when the blog post was published.
        - image: The URL of an image that represents the blog post.
        - url: The URL of the blog post on your blog.
    Save the changes you made to the file.
    Your modified blog data will be updated in the website.

Note: Make sure that you update the id property in a manner that ensures the uniqueness of each blog post.


## BOOK:
You can change "Latest Book Summaries" in booknote.js file. Then change your book page data in book.js. You can change newsletter link and data in book.js.

- To change the book data, follow these steps:

 Open the file bookdata.js in your code editor.
 Modify the existing objects in the bookdata array with your own information. Each object represents a book and should include the following properties:
        - id: A unique identifier for each book.
        - title: The title of the book.
        - author: The author of the book.
        - description: A brief description of the book.
        - url: The URL of the book review or summary on your blog.
        - image: The URL of an image that represents the book.
    Save the changes you made to the file.
    Your modified book data will be updated in the website.

Note: Make sure that you update the id property in a manner that ensures the uniqueness of each book.


## EXPLORE:
- To change the explore data, follow these steps:

Open the file exploreData.js in your code editor.
Modify the existing objects in the exploreData array with your own information. Each object represents a category and should include the following properties:
    - id: A unique identifier for each category.
    - icon: A symbol or icon that represents the category.
    - title: The title of the category.
    - description: A brief description of the category.
    - url: The URL of the category.
    Save the changes you made to the file.
    Your modified explore data will be updated in the website.

Note: Make sure that you update the id property in a manner that ensures the uniqueness of each category.


## PROJECT:
You can change project page title "Project" in project.js file.

- To change the project data, follow these steps:

Open the file projectData.js in your code editor.
Modify the existing objects in the projectData array with your own information. Each object represents a project and should include the following properties:
    - id: A unique identifier for each project.
    - title: The title of the project.
    - demo: The URL to a demo of the project.
    - code: The URL to the code of the project.
    - skill: A list of technologies used in the project.
    - image: The URL of an image that represents the project.

    Save the changes you made to the file.
    Your modified project data will be updated in the website.

Note: Make sure that you update the id property in a manner that ensures the uniqueness of each project.


## COURSERA:
Firstly you have to change your certificate image in image folder. Then you can import your certificate image from image folder.

- To change the coursera data, follow these steps:

Open the file courseradata.js in your code editor.
Modify the existing objects in the courseradata array with your own information. Each object represents a Coursera course and should include the following properties:
        - id: A unique identifier for each course.
        - image: The path to the image that represents the course.
        - url: The URL of the course on Coursera.
    Save the changes you made to the file.
    Your modified coursera data will be updated in the website.

Note: Make sure that you update the id property in a manner that ensures the uniqueness of each course and that the image paths are correct.


## STORE:
- To change the store data, follow these steps:

Open the file storedata.js in your code editor.
Modify the existing objects in the storedata array with your own information. Each object represents a store item and should include the following properties:
        - id: A unique identifier for each item.
        - title: The title of the item.
        - description: A brief description of the item.
        - url: The URL of the item.
    Save the changes you made to the file.
    Your modified store data will be updated in the website.

Note: Make sure that you update the id property in a manner that ensures the uniqueness of each item.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
