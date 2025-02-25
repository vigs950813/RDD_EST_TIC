$(document).ready(function () {
    let draggedItem = null;

    $('.draggable-item').on('dragstart', function (event) {
        draggedItem = $(this).attr('id');
    });

    $('[droppable="true"]').on('dragover', function (event) {
        event.preventDefault();
    });

    $('[droppable="true"]').on('drop', function (event) {
        event.preventDefault();
        const target = $(this).attr('id');
        $('#' + target).html($('#' + draggedItem).text());
    });
});
