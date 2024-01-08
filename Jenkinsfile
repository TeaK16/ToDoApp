pipeline {
    agent any
    
    environment{
    DOCKER_CRED = credentials('c5fe9c80-3eba-4432-bf5b-31afa32bd96d')
    }
    stages {
        stage('Build and Push Frontend Image') {
            steps {
                dir('frontend') {
                    // Checkout frontend code from repository
                    git url: 'https://github.com/TeaK16/ToDoApp.git'
                    
                    // Build frontend app and tag the Docker image
                    sh 'docker build -t TeaK16/ToDoApp/frontend .'
                    
                    // Push the frontend Docker image to Docker Hub
                    sh 'docker login -u $DOCKER_CRED_USR -p $DOCKER_CRED_PSW'
                    sh 'docker push TeaK16/ToDoApp/frontend'
                }
            }
        }
        
        stage('Build and Push Backend Image') {
            steps {
                dir('backend') {
                    // Checkout backend code from repository
                    git url: 'https://github.com/TeaK16/ToDoApp.git'
                    
                    // Build backend app and tag the Docker image
                    sh 'docker build -t TeaK16/ToDoApp/ToDoList .'
                    
                    // Push the backend Docker image to Docker Hub
                    sh 'docker login -u $DOCKER_CRED_USR -p $DOCKER_CRED_PSW'
                    sh 'docker push TeaK16/ToDoApp/ToDoList'
                }
            }
        }
    }
}
