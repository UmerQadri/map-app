import { ACCOUNT_BASE_URL, ACCOUNT_ID, CATEGORY } from "../constants";

class TaskPresenter {
  sendAddTaskRequest(request, address, callback) {
    const payload = {
      account: `${ACCOUNT_BASE_URL}${ACCOUNT_ID}/`,
      category: CATEGORY,
      address: { raw_address: address },
    };

    request(payload, callback);
  }

  sendGetTasksRequest(request) {
    request();
  }
}

export default new TaskPresenter();
