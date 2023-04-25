const key = 'qF7DtXoU19fCrNpm7BWR4UbhAxpL37l5UvKQVpZbdZcaotf9CQMQNmhmQFgHXUwz';
export const getHeaders = () => {
    return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-MBX-APIKEY',
    'X-MBX-APIKEY': key,
    }
};