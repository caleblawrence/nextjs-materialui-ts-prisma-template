-- CreateTable
CREATE TABLE "Keyboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "keyboardName" TEXT NOT NULL,
    "keyboardSwitch" TEXT NOT NULL,
    "keyboardLink" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Keyboard.name_unique" ON "Keyboard"("name");
