# Simple MyReactJS Dockerized Application#

Build the image using the following command

```bash
$ docker build -t my-react-app .
```

Run the Docker container using the command shown below.

```bash
$ docker run -d -p 80:80 my-react-app
```

The application will be accessible at http://ec2-instance-public-ip:80/

