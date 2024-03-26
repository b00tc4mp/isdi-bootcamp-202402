import Logger from './Logger';

const logger = new Logger;

function showFeedback(error) {
    logger.error(error);

    alert(error.message);
};

export {
    showFeedback,
    Logger,
    logger
};



