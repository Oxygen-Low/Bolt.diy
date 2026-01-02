This is a fork of Bolt.diy by Oxygen-Low. Feel free to use this for any reason.

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Oxygen-Low/Bolt.diy?utm_source=oss&utm_medium=github&utm_campaign=Oxygen-Low%2FBolt.diy&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)[![GitHub stars](https://img.shields.io/github/stars/Oxygen-Low/Bolt.diy?style=flat-square&logo=github)](https://github.com/Oxygen-Low/Bolt.diy/stargazers)



Here is a simple setup for a fresh Ubuntu 24.12.0 server:

``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
npm install -g pnpm
git clone https://github.com/Oxygen-Low/Bolt.diy
cd Bolt.diy
pnpm install
```
You can also use Docker using our [latest stable package](https://github.com/Oxygen-Low/Bolt.diy/pkgs/container/bolt.diy-stable) or our [latest beta package](https://github.com/Oxygen-Low/Bolt.diy/pkgs/container/bolt.diy-beta).

After it finishes, you need to create the ``.env.local`` file. You can use ``.env.example`` for help.

After you create the ``.env.local`` file, you can run ``pnpm run dev`` or ``pnpm run dev --host`` or just do whatever you want with it.

# Features List

Here is a list of all the features we added that are different from the normal Bolt.diy:

# Roadmap

Here are all the things we are planning to add, in order, with their development status:


# Experimental/Beta Branch
If you want to test some features out early or want to have access to some features early, use the beta branch. You can switch to it with ``git checkout beta``.

Note that the beta branch will likely contain errors or bugs way more often than the main/stable branch.

Testing for bugs and issues in the beta branch will be appreciated.

# Credits

It would be almost impossible to maintain and update this by myself (since I have to work on other projects constantly), so I use:

[CodeRabbit](https://www.coderabbit.ai/)

[Google Labs Jules](https://jules.google.com/)


# Licensing

bolt.diy source code is distributed as MIT, but it uses WebContainers API that [requires licensing](https://webcontainers.io/enterprise) for production usage in a commercial, for-profit setting. (Prototypes or POCs do not require a commercial license.) If you're using the API to meet the needs of your customers, prospective customers, and/or employees, you need a license to ensure compliance with our Terms of Service. Usage of the API in violation of these terms may result in your access being revoked.
