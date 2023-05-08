const deleteRecord = () => {
    let editBtn = document.querySelector('[data-testid="dns-table-row-edit-link"]');
    if (editBtn) {
        editBtn.click();
        setTimeout(() => {
            let deleteBtn = document.querySelector('[data-testid="dns-record-form-delete-button"]');
            if (deleteBtn) {
                deleteBtn.click();
                setTimeout(() => {
                    let confirmBtn = document.querySelector('[data-testid="dns-delete-modal-confirm-button"]');
                    if (confirmBtn) {
                        confirmBtn.click();
                        setTimeout(() => {
                            editBtn = document.querySelector('[data-testid="dns-table-row-edit-link"]');
                            deleteRecord();
                        }, 500);
                    }
                }, 500);
            }
        }, 500);
    }
};
deleteRecord();
