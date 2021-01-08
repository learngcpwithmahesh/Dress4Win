Credits & Source from: https://github.com/sendmail2krrish/eCommerce-site-using-Node-Express-js

# Dress4Win

### Launching db-server
1. Provision a Google Compute Engine (GCE) <br/>
2. SSH into the db-server. Switch as root user using sudo -s and below command to install MySQL Server. When prompted for password give a strong like P@ssW0rd2020 <br/>
<b>apt update</b> <br/>
<b>apt install mysql-server -y</b> <br/>
3. Comment bind-address configuration using <b> vi /etc/mysql/mysql.conf.d/mysqld.cnf </b> and save the configuration using ESC followed :wq! <br/>
4. Restart MySQL Service using <b>systemctl restart mysql</b> <br/>
5. Logging to mysql using <b>mysql -h 127.0.0.1 -u root -p</b>  <br/>
6. Create a database named eCommerce using <b>CREATE DATABASE eCommerce </b> <br/>
7. Run this command <b> GRANT ALL PRIVILEGES ON \*.\* TO 'root'@'%' IDENTIFIED BY 'P@ssw0rd2020';</b> to allow mysql to be accessed from app-server <br/>
7. Exit mysql session <br/>
8. Change directory to home directory using <b>cd ~</b> and run <b> git clone https://github.com/learngcpwithmahesh/Dress4Win.git </b>  <br/>
9. Change directory to Dress4Win/sql <br/>
10. Create the table schema using <b> mysql -h 127.0.0.1 -u root -p < ecommerce.sql </b> <br/>
 
### Launching app-server

1. Provision a Google Compute Engine (GCE) with below startup script <br/>
apt update <br/>
apt install -y git <br/>
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh <br/>
bash nodesource_setup.sh <br/>
apt install -y nodejs <br/>
npm install -g forever <br/>
git clone https://github.com/learngcpwithmahesh/Dress4Win.git <br/>
cd Dress4Win <br/>
npm install <br/>

2. SSH into the app-server. Switch as root user using sudo -s and change the database IP address in database/config.js file <br/>
3. Now, run the Node JS app to run in daemon mode using <b>forever start index.js </b> <br/>
4. Use the external IP of app-server to access the Dress4Win App <br/>
