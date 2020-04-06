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

  sendGetTasksRequest(request, callback) {
    request(callback);
  }

  getLatLngArr(tasks) {
    return tasks
      .filter((task) => task && task.address && task.address.location !== null)
      .map((item) => {
        const coords = item.address.location.coordinates;

        return {
          latitude: coords[1],
          longitude: coords[0],
        };
      });
  }
}

export default new TaskPresenter();
