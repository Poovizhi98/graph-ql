const db = require('./db');

const Query = {
    job : (root, args) => db.jobs.get(args.id),
    jobs : () => db.jobs.list(),
    company: (root, args) => db.companies.get(args.id)
};

const Mutation = {
    createJob: (root, {input}, {user}) => {
        if(!user) {
            throw new Error('Unauthorised');
        }
        const id = db.jobs.create({...input, companyId: user.companyId});
        return db.jobs.get(id);
    }
}

const Job = {
    company: (job) => db.companies.get(job.companyId)
}

const Company = {
    jobs: (company) => db.jobs.list().filter((job) => job.companyId === company.id)
}

module.exports = { Query, Job, Company, Mutation };