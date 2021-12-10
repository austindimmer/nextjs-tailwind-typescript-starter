cd C:\Dev\Temp\nextjs-tailwind-typescript-starter

yarn install
yarn build
yarn start
yarn dev
amplify -v
amplify help
npm i -g @aws-amplify/cli

curl -sL https://aws-amplify.github.io/amplify-cli/install-win -o install.cmd && install.cmd

amplify configure

amplify init
amplify pull
amplify import auth
amplify upgrade

cYj353P#%8vx

# https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/#configure-your-application
npm install aws-amplify
npm install aws-amplify @aws-amplify/ui-react

amplify pull --appId d95d1zoj32dow --envName staging
amplify add storage
amplify add auth

# If it is a valid Amplify project folder, Amplify will display a list of the resources in the project folder that you have deployed to the AWS cloud. 
amplify status

amplify push --force


amplify status
# will show you what you've added already and if it's locally configured or deployed

amplify add <category>
# will allow you to add features like user login or a backend API

amplify push
# will build all your local backend resources and provision it in the cloud

amplify console
# to open the Amplify Console and view your project status

amplify publish
# will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

amplify add api
# to create a backend API and then "amplify publish" to deploy everything

s2-documentation feature/well-architected-review-feb-2021 % = $ 

cd C:\Temp\amplify

# https will not work due to mfa enforcement on github
amplify init --app https://github.com/digits2/s2-documentation.git
amplify init --app https://github.com/digits2/s2-documentation
# therefore use ssh with default key (id_rsa and id_rsa.pub) and ssh-agent running
amplify init --app git@github.com:digits2/s2-documentation.git

git@github.com:digits2/s2-documentation.git

git clone git@github.com:digits2/s2-documentation

amplify env list

amplify env checkout <exising-environment>

ssh-agent -s


# https://docs.github.com/en/github/authenticating-to-github/error-permission-denied-publickey
# To make sure you are connecting to the right domain, you can enter the following command:
# validate ssh connectivity to github by running

ssh -vT git@github.com
ssh -T git@github.com

amplify awscloudformation reset-cache
amplify logout --appId d1v3fj4iksp1gp
amplify init --appId d1v3fj4iksp1gp
amplify configure project --appId d1v3fj4iksp1gp
# or it’s alias 
amplify aws reset-cache
