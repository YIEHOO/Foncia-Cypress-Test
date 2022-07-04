import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}


pipeline {
    
    agent any

    // Must be used with NodeJS Plugin to be installed on Jenkins https://plugins.jenkins.io/nodejs/

    tools {nodejs '18.4.0'}

    environment {
        BUILD_USER = ''
    }
    
    // Set the parameters that will be displayed on the Jenkins execution pîpeline

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**', description: 'Ej: cypress/e2e/*.feature')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
        choice(name: 'ENV', choices: ['production', 'staging', 'preprod'], description: 'Pick the environment you want to use to run your scripts')
    }
    
    // Must be used with AnsiColor Plugin to be installed on Jenkins https://plugins.jenkins.io/ansicolor/

    options {
        ansiColor('xterm')
    }

    stages {
        
        stage('Build'){

            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                sh "npm i -g corepack" // Change sh by bat in case of Jenkins installed on Windows
                sh "yarn install" // Change sh by bat in case of Jenkins installed on Windows
                sh "yarn test --browser ${BROWSER} --spec ${SPEC} --env ENV=${ENV}" // Change sh by bat in case of Jenkins installed on Windows
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            
            script {
                BUILD_USER = getBuildUser()
            }
            
            // Must be used with HTML Publisher Plugin to be installed on Jenkins https://plugins.jenkins.io/htmlpublisher/

            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'report1.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
        }
    }
}