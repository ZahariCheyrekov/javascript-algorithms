function towerOfHanoi(n, fromRode, toRode, usingRode) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRode} to ${toRode}.`);
        return;
    }

    towerOfHanoi(n - 1, fromRode, usingRode, toRode);
    console.log(`Move disk ${n} ${fromRode} to ${toRode}`);

    towerOfHanoi(n - 1, usingRode, toRode, fromRode);
}

// Big O => O(2^n)

towerOfHanoi(3, 'A', 'C', 'B');