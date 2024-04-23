const submitTask = async (taskData) => {
    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        if (!response.ok) {
            throw new Error('Failed to add task');
        }
        // If successful, return the response data
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding task:', error.message);
        throw error;
    }
};
