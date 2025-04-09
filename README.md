# Region-Types

Documenting save data formats for significant Minecraft versions!

This is the big project of documenting the shapes of Minecraft data over time, for all editions and versions. This will be used to eventually build programs which allow for the converting, upgrading, and editing of your Minecraft worlds. Having this type-safety will help immensely for that, as it is crucial to not lose data from worlds that are being worked with.

In regards to specifically older Java versions, here's the current list that I've been looking into:

- Classic 0.30
- Alpha 1.1.2_01
- Alpha 1.2.6
- Beta 1.7.3
- Release 1.1 (pre-Anvil)
- Release 1.5.2
- Release 1.7.10
- Release 1.8.9

This project encompasses a lot more than Java, but I'll have to come back another time to document that. There's a lot of nuance here.

It's also interesting, that the internal NBT is the concern here. The external file format itself that this data is stored in, this is what is changing over time as well. I don't take that lightly, that will need it's own set of documentation and descriptions too. I am trying to find the similarities and crossover for the internal data structures of the game save data itself, then worry about how it is saved later on. I really want things like Entities and Block Entities to carry over effectively.
