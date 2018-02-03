module.exports = {
    apps: [{
        name: 'Pratham',
        script: './server.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-52-66-173-139.ap-south-1.compute.amazonaws.com',
            key: '~/.ssh/keys/pratham.pem',
            ref: 'origin/master',
            repo: 'git@github.com:whysosunny/pratham-trainers.git',
            path: '/home/ubuntu/pratham-trainers',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
};