pipeline {
    agent {
    dockerfile true
    }
    environment{
    DOCKER_CRED = credentials('c5fe9c80-3eba-4432-bf5b-31afa32bd96d')
    }

    stages {
        stage('Build and Push Images') {
            steps {
                checkout scm

                // Build and push frontend Docker image
                dir('frontend') {
                    sh 'npm install' // or any frontend build command
                    sh 'docker build -t TeaK16/ToDoApp/frontend .'
                    sh 'docker push TeaK16/ToDoApp/frontend'
                    echo 'Build FrontendImage Completed'
                }

                // Build and push backend Docker image
                dir('ToDoList') {
                    sh 'mvn clean install' // or any backend build command
                    sh 'docker build -t TeaK16/ToDoApp/ToDoList .'
                    sh 'docker push TeaK16/ToDoApp/ToDoList'
                    echo 'Build BackendImage Completed'
                }
            }
        }
        stage('Login to Docker Hub') {
              steps{
        	sh 'echo $DOCKER_CRED_PSW | sudo docker login -u $DOCKER_CRED_USR --password-stdin'
        	echo 'Login Completed'
              }
            }
        stage('Deploy with docker-compose') {
            steps {
                sh 'docker-compose pull'
                sh 'docker-compose up -d'

                }



        }
    }
}
