# Copyright 2016 Splunk, Inc.
# SPDX-FileCopyrightText: 2020 2020
#
# SPDX-License-Identifier: Apache-2.0

"""
This module contains simple interfaces for File compression and decompression.
"""

import gzip
import zipfile

from io import BytesIO


__all__ = ["GzipHandler", "ZipHandler"]


class GzipHandler:
    """
    Class for handling gzip-formatted string content.
    """

    @classmethod
    def check_format(cls, data):
        """Validate `data` whether it is in gzip format.

        Bytes 0 and 1 should be (per RFC 1952):
        data[0] = 31 (0x1f), data[1] = 139 (0x8b).

        :param data: Data to check.
        :type data: ``bytes``
        :returns: True if it is in gzip format else False.
        :rtype: ``bool``
        """

        return data[0:2] == b"\x1f\x8b"

    @classmethod
    def decompress(cls, data):
        """Decompress gzip-compressed data `data`.

        It will perform basic validation, then return the decompressed
        data or raises ValueError exception for invalid `data`.

        :param data: Gzip-compressed data to decompress.
        :type data: ``bytes``
        :returns: decompressed data.
        :rtype: ``string``

        :raises ValueError: If `data` is not in gzip format
        """

        if not cls.check_format(data):
            raise ValueError("File is not gzip format.")

        return gzip.GzipFile(fileobj=BytesIO(data), mode="rb").read()


class ZipHandler:
    """
    Class for handling zip files.
    """

    @classmethod
    def check_format(cls, data):
        """Validate `data` whether it is in zip format.

        :param data: Data to check.
        :type data: ``bytes``
        :returns: True if it is in zip format else False.
        :rtype: ``bool``
        """

        return zipfile.is_zipfile(BytesIO(data))

    @classmethod
    def decompress(cls, data):
        """Decompress zip-compressed data `data`.

        It will perform basic validation, then return the decompressed
        data or raises ValueError exception with error message.

        :param data: Zip-compressed data to decompress.
        :type data: ``bytes``
        :returns: decompressed data.
        :rtype: ``string``

        :raises ValueError: If decompress data failed.
        """

        if not cls.check_format(data):
            raise ValueError("File is not zip format.")

        fh = BytesIO(data)
        decompressor = zipfile.ZipFile(fh)

        files = decompressor.infolist()
        if len(files) > 1:
            raise ValueError(
                "Zip files containing multiple files not supported by this " "handler."
            )

        try:
            text = decompressor.read(files[0].filename)
        except:
            raise ValueError("Unknown exception when extracting zip file.")

        if len(text) != files[0].file_size:
            raise ValueError("Zip file size does not match actual size.")

        return text
