pipeline {
    agent any

    stages {
        stage('Build and Push Images') {
            steps {
                checkout scm

                // Build and push frontend Docker image
                dir('frontend') {
                    sh 'npm install' // or any frontend build command
                    sh 'docker build -t TeaK16/ToDoApp/frontend .'
                    sh 'docker push TeaK16/ToDoApp/frontend'
                }

                // Build and push backend Docker image
                dir('ToDoList') {
                    sh 'mvn clean install' // or any backend build command
                    sh 'docker build -t TeaK16/ToDoApp/ToDoList .'
                    sh 'docker push TeaK16/ToDoApp/ToDoList'
                }
            }
        }

        stage('Deploy with docker-compose') {
            steps {
                // Install Docker and Docker Compose if needed
                docker.withRegistry('https://hub.docker.com/', 'c5fe9c80-3eba-4432-bf5b-31afa32bd96d_') {
                 // Pull the updated images from Docker Hub
                                sh 'docker-compose pull'

                                // Recreate containers using the updated images
                                sh 'docker-compose up -d'
                            }
                }



        }
    }
}
