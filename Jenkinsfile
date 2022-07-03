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
    tools {nodejs '18.4.0'}

    environment {
        BUILD_USER = ''
    }
    
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**', description: 'Ej: cypress/e2e/*.feature')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
        choice(name: 'ENV', choices: ['production', 'staging', 'preprod'], description: 'Pick the environment you want to use to run your scripts')
    }
    
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
                sh "npm i -g corepack"
                sh "yarn install"
                sh "yarn test --browser ${BROWSER} --spec ${SPEC} --env=\\"${ENV}\\""
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
            
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
        }
    }
}