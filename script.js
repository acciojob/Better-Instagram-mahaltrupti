//your code here
document.addEventListener('DOMContentLoaded', () => {
    const draggableItems = document.querySelectorAll('.draggable-item');
    let draggedItem = null;

    draggableItems.forEach(item => {
        // Event for when dragging begins
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => {
                e.target.style.opacity = '0.5';
            }, 0);
        });

        // Event for when a draggable item is over a droppable area
        item.addEventListener('dragover', (e) => {
            e.preventDefault(); // Prevents default behavior to allow a drop
        });

        // Event for when a draggable item is dropped
        item.addEventListener('drop', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('draggable-item') && e.target !== draggedItem) {
                const targetItem = e.target;
                const tempBackground = draggedItem.style.backgroundImage;
                
                // Swap the background images
                draggedItem.style.backgroundImage = targetItem.style.backgroundImage;
                targetItem.style.backgroundImage = tempBackground;
            }
        });

        // Event for when dragging ends
        item.addEventListener('dragend', (e) => {
            e.target.style.opacity = '1';
            draggedItem = null;
        });
    });
});