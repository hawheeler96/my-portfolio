function Footer() {
    return (
      <div className="fixed bottom-0 w-full border-t-2 bg-white dark:bg-midnight dark:text-white dark:border-gray-600">
        <div className="container mx-auto py-4 text-xl font-quicksand font-medium flex justify-center">
          <a
            href="https://github.com/hawheeler96"
            className="mx-2 hover:text-rose  dark:hover:text-xanthous"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/holly-a-wheeler/"
            className="mx-2 hover:text-rose  dark:hover:text-xanthous"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@hollyawheeler96"
            className="mx-2 hover:text-rose  dark:hover:text-xanthous"
          >
            Blog
          </a>
        </div>
      </div>
    );
}

export default Footer;