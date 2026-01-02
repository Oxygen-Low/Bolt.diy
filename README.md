This is a fork of Bolt.diy by Oxygen-Low. Feel free to use this for any reason.
Go check the original repository for better setup instructions.
Here is a simple setup for Ubuntu 24.12.0:

``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
npm install -g pnpm
git clone https://github.com/Oxygen-Low/Bolt.diy
cd Bolt.diy
pnpm install
```
After it finishes, you can run ``pnpm run dev`` or ``pnpm run dev --host`` or just do whatever you want with it.

# Credits

It would be almost impossible to maintain and update this by myself (since I have to constantly work on other projects), so I use:
[CodeRabbit](https://www.coderabbit.ai/)

# Licensing

bolt.diy source code is distributed as MIT, but it uses WebContainers API that [requires licensing](https://webcontainers.io/enterprise) for production usage in a commercial, for-profit setting. (Prototypes or POCs do not require a commercial license.) If you're using the API to meet the needs of your customers, prospective customers, and/or employees, you need a license to ensure compliance with our Terms of Service. Usage of the API in violation of these terms may result in your access being revoked.
