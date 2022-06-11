const NODE_ENV = process.env.NODE_ENV;

exports.SECRET = process.env.SECRET;

exports.TEST = NODE_ENV === 'test';

exports.PRODUCTION = NODE_ENV === 'production';
