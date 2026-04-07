function switchTab(tab) {
    document.getElementById('tab-local').classList.add('hide');
    document.getElementById('tab-micro').classList.add('hide');
    document.getElementById('btn-local').classList.replace('bg-green-100', 'bg-white');
    document.getElementById('btn-local').classList.replace('text-green-800', 'text-gray-500');
    document.getElementById('btn-micro').classList.replace('bg-green-100', 'bg-white');
    document.getElementById('btn-micro').classList.replace('text-green-800', 'text-gray-500');
    
    document.getElementById('tab-' + tab).classList.remove('hide');
    document.getElementById('btn-' + tab).classList.replace('bg-white', 'bg-green-100');
    document.getElementById('btn-' + tab).classList.replace('text-gray-500', 'text-green-800');
}

function joinOpportunity(id) {
    console.log('Joined opportunity:', id);
    alert('✓ You have joined this opportunity!');
}

function startTask(id) {
    console.log('Started task:', id);
    alert('✓ Task started! Good luck!');
}

function exportToLinkedIn() {
    console.log('Exporting to LinkedIn...');
    alert('✓ Exporting your impact portfolio to LinkedIn!');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌱 EcoPulse app loaded');
});