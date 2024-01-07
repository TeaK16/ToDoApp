FROM openjdk:21
LABEL authors="TeodoraK"

VOLUME /tmp
EXPOSE 8080
COPY ./target/ToDoList-0.0.1-SNAPSHOT.jar todolist.jar
ENTRYPOINT ["java","-jar","/todolist.jar"]
