function Footer() {
    return (
      <div className="flex justify-center py-10">
        <div className="fixed bottom-10 text-xl border-t-2 font-quicksand dark:text-soft-white">
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