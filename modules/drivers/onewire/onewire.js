/*
 * Copyright (c) 2019  Moddable Tech, Inc.
 * Copyright (c) 2019  Wilberforce
 *
 *   This file is part of the Moddable SDK.
 *
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>.
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

// Dallas instruments onewire protocol
// DS18B20, DS18S20 - temperature sensors
// OneWire EEPROMs- AT24 AT25 TCS3472x DS2xxx  (DS24B33, DS2431, DS28EC20 etc)

class OneWire @ "xs_onewire_destructor" {
  constructor(dictionary) @ "xs_onewire";

  // Remove and just use destructor???
  close() @ "xs_onewire_close";

  // The byte that was read, or a Uint8Array if count was specified and >=0
  read(count) @ "xs_onewire_read";

  // data - A byte (or array of bytes) to write
  write(data) @ "xs_onewire_write";

  // rom - The device to select (get this using OneWire.search())
  select(device) @ "xs_onewire_select";

  // An array of devices that were found
  search() @ "xs_onewire_search";

  // Reset the bus - returns True is a device was present
  reset() @ "xs_onewire_reset";

  // Calculate CRC
  crc() @ "xs_onewire_crc";

  // skip a ROM
  skip() {
    xs_onewire_write(0xCC);
  }

  // hex version of the rom
  rom(buffer) {
    return BigInt.fromArrayBuffer(buffer).toString(16);
  }

}

Object.freeze(OneWire.prototype);

export default OneWire;